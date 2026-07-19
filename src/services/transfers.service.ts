import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TopTransfersOptions, TopTransfersResponse } from '../types/transfers.types';

export class TransfersService {
  /**
   * Fetches top transfers data.
   * @param options Configuration for fetching transfers (e.g., currency, page).
   * @returns A promise resolving to the top transfers payload.
   */
  static async getTopTransfers(options: TopTransfersOptions = {}): Promise<TopTransfersResponse> {
    const params: Record<string, string> = {};

    if (options.minFeeCurrency) params.minFeeCurrency = options.minFeeCurrency;
    if (options.page !== undefined) params.page = options.page.toString();

    return HttpClient.get<TopTransfersResponse>(Endpoints.TOP_TRANSFERS, params);
  }
}
