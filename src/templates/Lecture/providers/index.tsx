import React, { FC, createContext, ReactNode } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import data from "../../../assets/data/unit00_master.json";

interface LectureDataProviderProps {
  children: ReactNode;
}

export const LectureDataProviderContext = createContext<Lecture[]>([]);

export const LectureDataProvider: FC<LectureDataProviderProps> = ({
  children,
}) => {
  const lectureData: Lecture[] = data.lecture[0].steps as Lecture[];
  return (
    <LectureDataProviderContext.Provider value={lectureData}>
      {children}
    </LectureDataProviderContext.Provider>
  );
};
