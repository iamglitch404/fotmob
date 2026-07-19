import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TvListingOptions, TvListingResponse } from '../types/tvlistings.types';

export class TvListingsService {
  /**
   * Fetches TV listings for a specific country.
   * @param options The configuration options for fetching listings.
   * @returns A promise that resolves to the TV listings data.
   */
  static async getListings(options: TvListingOptions): Promise<TvListingResponse> {
    const params: Record<string, string> = {
      countryCode: options.countryCode,
    };

    if (options.ids && options.ids.length > 0) {
      params.ids = options.ids.join(',');
    }

    return HttpClient.get<TvListingResponse>(Endpoints.TV_LISTINGS, params);
  }
}
