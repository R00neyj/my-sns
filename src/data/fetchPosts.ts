import { supabase } from '../lib/supabase'
import type { Post } from './samplePosts'

export type PostPage = {
  posts: Post[]
  hasMore: boolean
}

// offset 번째부터 limit 개를 sns_posts 에서 최신순으로 가져온다.
// 받은 개수가 limit 보다 적으면 더 가져올 게 없다고 봄
export async function fetchPosts(offset: number, limit = 10): Promise<PostPage> {
  const { data, error } = await supabase
    .from('sns_posts')
    .select('id, author, content, images, created_at')
    .order('created_at', { ascending: false })
    .order('id', { ascending: false })
    .range(offset, offset + limit - 1)
    .overrideTypes<Post[], { merge: false }>()

  if (error) throw error

  return { posts: data, hasMore: data.length === limit }
}
