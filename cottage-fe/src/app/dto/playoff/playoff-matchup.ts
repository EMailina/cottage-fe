export interface PlayoffMatchup {
  seasonId: number;
  conference: string;
  division: string;
  teamHomeId: number;
  teamHomeName: string;
  teamHomeSeed: number;
  teamHomeIsWildcard: boolean;
  teamHomeWins?: number;
  teamHomeOwner?: 'ERIK' | 'ZUZKA';
  teamAwayId: number;
  teamAwayName: string;
  teamAwaySeed: number;
  teamAwayIsWildcard: boolean;
  teamAwayWins?: number;
  teamAwayOwner?: 'ERIK' | 'ZUZKA';
  round: string;
}
