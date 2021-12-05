import {
  forwardRef, MutableRefObject, Ref, RefObject, useEffect, useRef,
} from "react";
import { Checkbox } from "@mui/material";

interface Props {
  indeterminate?: boolean;
}

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }: Props, ref) => {
  const resolvedRef: MutableRefObject<HTMLInputElement | null> | RefObject<HTMLInputElement> | Ref<HTMLInputElement> | undefined = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (resolvedRef.current) {
      if (typeof indeterminate === "boolean") {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }
  }, [resolvedRef, indeterminate]);

  return (
    <Checkbox inputRef={resolvedRef} {...rest} />
  );
});

IndeterminateCheckbox.displayName = "IndeterminateCheckbox";

export default IndeterminateCheckbox;
