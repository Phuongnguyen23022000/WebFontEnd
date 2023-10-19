import React from 'react';
import { YoutubeData } from '../../data';
import Youtube from './YoutubeItem';

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {/* {props.children} */}
      {/* <Youtube title='Youtube' text="xin chào kênh của bạn"/> */}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        // eslint-disable-next-line no-unused-vars
        if (index === 1) newClass = "abc"; // thay newClass vao className nhan class moi
        // const newClass = index === 1 ? 'abc' : '';
        return (
          <Youtube key={item.id} text={item.text} img={item.img || item.avatar} title={item.title} avatar={item.avatar || item.img} className={newClass} />
        );
      })}
    </div>
  );
};

export default YoutubeList;