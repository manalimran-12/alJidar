"use client";

import React from 'react';
import data from '@/public/data';
import QualitySectionProp from './QualitySectionProp';
const QualitySection = () => {

  return (
    <QualitySectionProp
      sections={data.qualitySection.sections}
    />
  );
};

export default QualitySection;