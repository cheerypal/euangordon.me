import React from "react";
import styled from "styled-components";
import { CustomBtn } from "../../custom-btn";
import { CustomList } from "../custom-list";

const Paragraph = styled.p`
  margin: 1% 0;
`;

export const Section = (props: {
  title: string;
  description: string;
  skills: string[];
  link: string;
}): JSX.Element => {
  // function to split the description up into a list after each sentence
  const layerDescription = (desc: string): string[] => {
    if (desc.includes(".")) return desc.split(".");
    else return [desc];
  };

  let newDescription = layerDescription(props.description);

  console.log(newDescription);

  return (
    <div>
      <div>
        {newDescription.map((data) => (
          <Paragraph key={newDescription.indexOf(data)}>{data}</Paragraph>
        ))}
      </div>

      <CustomList skills={props.skills} />

      <div>
        <CustomBtn title={props.title} link={props.link} />
      </div>
    </div>
  );
};
