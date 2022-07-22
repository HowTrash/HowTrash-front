import React, { PureComponent, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Content {
  trash_kind: string;
  cnt: number;
}

interface Contentlist {
  list: Array<Content>;
}

function TrashChart({ list }: Contentlist) {
  console.log("잘 받아와지는지?", list);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={400}
        height={300}
        data={list}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='trash_kind' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='cnt' fill="#759F98" barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default TrashChart;