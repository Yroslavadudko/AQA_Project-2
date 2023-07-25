import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, selectUserArray } from 'redux/selectors';
import * as Yup from 'yup';
import {
  ModalWrapper,
  CloseButton,
  UserAvatarWrapper,
  ContentWrapper,
  AvatarFrame,
  StyledFormInsight,
  StyledForm,
  SaveChangeButton,
  StyledInput,
  StyledInputWrap,
  StyledIconChecked,
  StyledIconError,
  AddIconImg,
  StyledInputFile,
} from './UserInfoModal.styled';
import {
  StyledError,
  StyledMessage,
} from 'components/Forms/RegisterForm/RegisterForm.styled';
import { updateUserThunk } from 'redux/UserInfo/userOperations';
import XIcon from './x.svg';
import XIconBlack from '../../../assets/icons/close.svg';

import AddIcon from './add_photo.svg';
const defaultAvatarURL = require('./user.png');

export const UserInfoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUserArray);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imgURL, setImageURL] = useState('');
  useEffect(() => {
    const handleOutsideClick = event => {
      if (!event.target.closest('.modal-content')) {
        onClose();
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const handleAvatarChange = async e => {
    const file = e.target.files[0];
    setSelectedAvatar(file);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageURL(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const handleOnSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    if (selectedAvatar) {
      formData.append('avatarURL', selectedAvatar);
    }
    const res = await dispatch(updateUserThunk(formData));
    if (res.meta.requestStatus === 'fulfilled') {
      onClose();
    }
  };
  let avatar;
  if (imgURL) {
    avatar = imgURL;
  } else if (user.avatarUrl) {
    avatar = user.avatarUrl;
  } else {
    avatar = defaultAvatarURL;
  }
  return isOpen ? (
    <ModalWrapper>
      <ContentWrapper className="modal-content">
        <CloseButton onClick={onClose} tabIndex={1} className="close-button">
          <img
            src={theme === 'dark' ? XIcon : XIconBlack}
            alt="Close"
            width={24}
          />
        </CloseButton>
        <StyledForm
          initialValues={{
            avatarURL: '',
            name: user.name || '',
          }}
          validationSchema={Yup.object({
            avatarURL: Yup.string(),
            name: Yup.string().matches(
              /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
              'Name can only contain letters or numbers.'
            ),
          })}
          onSubmit={handleOnSubmit}
        >
          {({ errors, touched, handleChange, setFieldTouched }) => (
            <StyledFormInsight>
              <UserAvatarWrapper>
                <AvatarFrame src={avatar} alt="avatar" width={100} />
                <label htmlFor="avatarInput">
                  <AddIconImg src={AddIcon} alt="plus" width={28} />
                  <StyledInputFile
                    type="file"
                    id="avatarInput"
                    accept="image/*"
                    onChange={handleAvatarChange}
                  />
                </label>
              </UserAvatarWrapper>
              <StyledInputWrap>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={e => {
                    setFieldTouched('name');
                    handleChange(e);
                  }}
                  className={
                    touched.name && !errors.name
                      ? 'valid-border'
                      : errors.name && touched.name
                      ? 'invalid-border'
                      : ''
                  }
                />
                {errors.name && touched.name && (
                  <div>
                    <StyledIconError color="red" />{' '}
                    <StyledError name="name" component="div" />
                  </div>
                )}
                {touched.name && !errors.name && (
                  <div>
                    <StyledIconChecked color="green" />{' '}
                    <StyledMessage>This is an CORRECT name</StyledMessage>
                  </div>
                )}
              </StyledInputWrap>
              <SaveChangeButton type="submit">Save changes</SaveChangeButton>
            </StyledFormInsight>
          )}
        </StyledForm>
      </ContentWrapper>
    </ModalWrapper>
  ) : null;
};
