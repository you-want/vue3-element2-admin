import type { ResPage, User } from '@/api/interface/index'
import { PORT1 } from '@/api/config/servicePort'
import http from '@/api'

/**
 * @name 人员管理模块
 */
// 获取用户列表
export const queryList = (params: User.ReqUserParams) => {
  return http.post<ResPage<User.ResUserList>>(PORT1 + `/subMerInvite/v1/queryList`, params)
}
