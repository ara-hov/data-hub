import { FC } from 'react';
import ActionButtons from '../action-buttons/ActionButtons';
import './contentHeader.scss';

interface ContentHeaderProps {
  title?: string;
}

const ContentHeader: FC<ContentHeaderProps> = ({ title }) => {
  return (
    <div className='content__header'>
      <span className='content__header--title'>{title}</span>
      <div className='content__header__buttons'>
        <ActionButtons className='add__button' buttonText='Add Data Source'/>
        <ActionButtons className='save__button' buttonText='Save'/>
      </div>
    </div>
  );
};

export default ContentHeader;
