import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { AudioMatchesResponse } from '../types/audio.types';

export class AudioService {
  /**
   * Fetches a list of matches that currently have live audio commentary.
   * @returns A promise resolving to the list of audio matches.
   */
  static async getAudioMatches(): Promise<AudioMatchesResponse> {
    return HttpClient.get<AudioMatchesResponse>(Endpoints.AUDIO_MATCHES);
  }
}
