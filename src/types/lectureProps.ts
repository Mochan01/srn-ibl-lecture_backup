import { JsonData } from './jsonData';

export interface CommonProps {
  unitName: string;
  unitTitle: string;
  data: JsonData;
  onClose?: () => void;
}
