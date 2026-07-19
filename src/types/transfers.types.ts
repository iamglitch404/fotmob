export interface TopTransfersOptions {
  /** 
   * Minimum fee currency.
   * @example 'EUR' 
   */
  minFeeCurrency?: string;
  
  /** 
   * Page number for pagination.
   * @example 1
   */
  page?: number;
}

export interface TransferPosition {
  label: string;
  key: string;
}

export interface TransferFee {
  feeText: string;
  localizedFeeText: string;
  value: number;
}

export interface TransferType {
  text: string;
  localizationKey: string;
}

export interface TransferItem {
  name: string;
  playerId: number;
  position: TransferPosition;
  transferDate: string;
  transferText: Array<{
    language: string;
    text: string;
  }>;
  fromClub: string;
  fromClubFullName: string;
  fromClubId: number;
  toClub: string;
  toClubFullName: string;
  toClubId: number;
  fee: TransferFee;
  amountEuroEstimated: number | null;
  transferType: TransferType;
  contractExtension: boolean;
  onLoan: boolean;
  fromDate: string;
  toDate: string | null;
  marketValue: number;
}

export interface TopTransfersResponse {
  transfers: TransferItem[];
  hits: number;
  maxFee: number;
}
