import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TopTransfersOptions, TopTransfersResponse } from '../types/transfers.types';

export const getTopTransfers = async (options: TopTransfersOptions = {}): Promise<TopTransfersResponse> => {
    const params: Record<string, string> = {};

    if (options.minFeeCurrency) params.minFeeCurrency = options.minFeeCurrency;
    if (options.page !== undefined) params.page = options.page.toString();

    return HttpClient.get<TopTransfersResponse>(Endpoints.TOP_TRANSFERS, params);
  }
