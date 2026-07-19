import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { AudioMatchesResponse } from '../types/audio.types';

export const getAudioMatches = async (): Promise<AudioMatchesResponse> => {
    return HttpClient.get<AudioMatchesResponse>(Endpoints.AUDIO_MATCHES);
  }
