export type BoxConstraint =
  | {
      width: number;
      height: number;
    }
  | {
      width: number;
      height: number;
      minWidth?: number;
      minHeight?: number;
    }
  | {
      width: number;
      height: number;
      maxWidth?: number;
      maxHeight?: number;
    }
  | {
      width: number;
      height: number;
      minWidth?: number;
      minHeight?: number;
      maxWidth?: number;
      maxHeight?: number;
    };
