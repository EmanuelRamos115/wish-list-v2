import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class ProductSearchClient extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        ...options?.headers,
        VtexIdclientAutCookie: context.authToken,
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
    })
  }

  public async getProduct(id: string): Promise<any> {
    return this.http.get(
      `/api/catalog_system/pub/products/search?fq=skuId%3A${id}`
    )
  }
}
