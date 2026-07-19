import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TvListingOptions, TvListingResponse } from '../types/tvlistings.types';

export const getListings = async (options: TvListingOptions): Promise<TvListingResponse> => {
    const params: Record<string, string> = {
      countryCode: options.countryCode,
    };

    if (options.ids && options.ids.length > 0) {
      params.ids = options.ids.join(',');
    }

    return HttpClient.get<TvListingResponse>(Endpoints.TV_LISTINGS, params);
  }
