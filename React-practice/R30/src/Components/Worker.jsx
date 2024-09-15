import React from 'react';
import proptype from 'prop-types'

const Worker = (props) => {
  const styles = 'grid grid-flow-row lg:grid-cols-3 md:grid-flow-dense text-center p-2 m-2 border-[2px] lg:border-[1px] rounded-md border-black font-semibold text-sm';

  return (
     <div className={styles }>
      <p>Name: {props.name}</p>
      <p>Profession: {props.profession}</p>
      <p>isFiler: {props.isFiler ? 'Yes' : 'No'}</p>
     </div>
  );
}
  Worker.proptype = {
    name: proptype.string,
    profession: proptype.string,
    isFiler: proptype.bool,
  }
  Worker.defaultProps = {
    name: 'Guest',
    profession: 'None',
    isFiler: false,
  }
export default Worker;
