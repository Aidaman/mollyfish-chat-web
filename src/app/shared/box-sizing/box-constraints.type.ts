export type BoxConstraint =
  | {
      width: string;
      height: string;
    }
  | {
      width: string;
      height: string;
      minWidth?: string;
      minHeight?: string;
    }
  | {
      width: string;
      height: string;
      maxWidth?: string;
      maxHeight?: string;
    }
  | {
      width: string;
      height: string;
      minWidth?: string;
      minHeight?: string;
      maxWidth?: string;
      maxHeight?: string;
    };
