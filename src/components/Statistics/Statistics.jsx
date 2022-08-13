import React from "react";
import PropTypes from "prop-types";
import { StatsList, StatisticValue } from './StatisticsStyled';

export const  Statistics = ({ good, neutral, bad, positiveValue, total }) => {
  return (
		<>
	<StatsList >
		<StatisticValue >Good: {good}</StatisticValue>
    <StatisticValue >Neutral: {neutral}</StatisticValue>
    <StatisticValue >Bad: {bad}</StatisticValue>
    <StatisticValue>Total: {total}</StatisticValue>
    <StatisticValue>Positive: {positiveValue}%</StatisticValue>
	</StatsList>
	</>
)};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveValue: PropTypes.number.isRequired,
};	