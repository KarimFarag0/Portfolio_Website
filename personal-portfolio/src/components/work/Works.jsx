import React from 'react';
import {projectsData} from './Data';
import { projectsNav } from './Data';
import WorksItem from './WorkItems';

const Works = () => {
  return (
   <div>

    <div className="work__container container grid">
        {projectsData.map((item) => {
            return <WorksItem item={item} key={item.id} />
        })}
    </div>
   </div>
  );
};

export default Works