import { useCallback, useState } from "react";
/**
 * control the seek bar
 * @param points fix position
 * @param index initial index in the points
 * @param fixBasis the basis of which the position of trigger to fix
 * @returns
 */
export const useSeekControl = (steps, index, fixBasis) => {
    const { seekStart } = steps.filter(x => x.stepProgress === index)[0];
    const [value, setValue] = useState(seekStart);
    const getClosest = useCallback(() => {
        // 結果発表ステップには止まれない仕様の為
        // 除いておく
        const _steps = steps.filter(x => !x.isResultStep);
        let closest;
        switch (fixBasis) {
            case "CENTER":
                closest = _steps.reduce((prev, curr) => {
                    const conditions = Math.abs(curr.seekStart - value) < Math.abs(prev.seekStart - value);
                    return conditions ? curr : prev;
                });
                break;
            case "EDGE":
                closest = _steps.reduce((prev, curr) => {
                    return curr.seekStart < value ? curr : prev;
                });
                break;
        }
        ;
        setValue(closest.seekStart);
        return closest;
    }, [value]);
    return {
        value,
        setValue,
        getClosest
    };
};
//# sourceMappingURL=useSeekControl.js.map