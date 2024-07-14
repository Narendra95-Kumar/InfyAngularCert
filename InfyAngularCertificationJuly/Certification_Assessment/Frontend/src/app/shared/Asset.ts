export default class Asset {
  assetId: number;
  assetName: string;
  assetCategory: string;
  assetDescription: string;
  dateOfPurchase: string;
  assetCost: number;
}

export interface AssetCategory{
  value: string;
  displayText: string;
  disabled: boolean;
}

export const AssetCategories: AssetCategory[] = [
  {
    value: '',
    displayText: 'Select a Category',
    disabled: true
  },
  {
    value: 'Laptop',
    displayText: 'Laptop',
    disabled: false
  },
  {
    value: 'Desktop',
    displayText: 'Desktop',
    disabled: false
  },
  {
    value: 'VoIP',
    displayText: 'VoIP',
    disabled: false
  },
  {
    value: 'Router',
    displayText: 'Router',
    disabled: false
  }
]