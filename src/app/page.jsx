"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <LoremList />
    </div>
  );
}

const lorems = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eius mollitia nisi, animi quas quos. Voluptates, ea accusantium cupiditate perspiciatis quam rerum fuga laudantium facilis, odit unde pariatur at. Architecto!",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eius mollitia nisi, animi quas quos. Voluptates, ea accusantium cupiditate perspiciatis quam rerum fuga laudantium facilis, odit unde pariatur at. Architecto!",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eius mollitia nisi, animi quas quos. Voluptates, ea accusantium cupiditate perspiciatis quam rerum fuga laudantium facilis, odit unde pariatur at. Architecto!",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eius mollitia nisi, animi quas quos. Voluptates, ea accusantium cupiditate perspiciatis quam rerum fuga laudantium facilis, odit unde pariatur at. Architecto!",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eius mollitia nisi, animi quas quos. Voluptates, ea accusantium cupiditate perspiciatis quam rerum fuga laudantium facilis, odit unde pariatur at. Architecto!",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eius mollitia nisi, animi quas quos. Voluptates, ea accusantium cupiditate perspiciatis quam rerum fuga laudantium facilis, odit unde pariatur at. Architecto!",
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eius mollitia nisi, animi quas quos. Voluptates, ea accusantium cupiditate perspiciatis quam rerum fuga laudantium facilis, odit unde pariatur at. Architecto!",
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eius mollitia nisi, animi quas quos. Voluptates, ea accusantium cupiditate perspiciatis quam rerum fuga laudantium facilis, odit unde pariatur at. Architecto!",
  },
];

const LoremList = () => {
  const [currentIndex, setCurrentIndex] = useState[0];
};
