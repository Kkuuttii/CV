import { useState } from 'react';
import { Article } from '../../components/Article';
import { Collapse } from '../../components/Collapse';
import { educationInfo } from '../../utils/constantas';
export function Education() {
  const [currentOpen, setCurrentOpen] = useState<string>('');

  const handleToggle = (key: string): void => {
    if (currentOpen === key) {
      setCurrentOpen('');
    } else {
      setCurrentOpen(key);
    }
  };

  const educationList: JSX.Element[] = educationInfo.map((educationType) => {
    const coursesInfo = educationType.items.map((course) => {
      return <Article title={course.title} text={course.text} time={course.time} />;
    });

    return (
      <Collapse
        isOpen={currentOpen === educationType.key.toString()}
        onToggle={handleToggle}
        id={educationType.key.toString()}
        key={educationType.key}
        title={educationType.collapseTitle}
      >
        {coursesInfo}
      </Collapse>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 h-fit bg-red-50">
      <h2>Education</h2>
      <div className="flex w-full">
        <div className="justify-between w-1/2">{educationList}</div>
        <div className="">picture</div>
      </div>
    </div>
  );
}
