import { TIdentity } from '@/common/contract/common.types'

export interface IIdentityGenerator {
  generateIdentity(): TIdentity
}
