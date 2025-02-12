"use client";

import React from 'react';
import data from '@/public/data';
import QualitySectionProp from './QualitySectionProp';
const QualitySection = () => {

  return (
    <QualitySectionProp
      hover={"#252525"}
      bgColor={"#323232"}
      sections={data.qualitySection.sections}
    />
  );
};

export default QualitySection;