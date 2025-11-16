import React, { useContext, useState } from 'react';
import { WillFormContext } from '../../context/WillFormProvider';
import Card from '../ui/Card';
import Input from '../ui/Input';
import { useLocalization } from '../../context/LocalizationContext';

const Step6Media: React.FC = () => {
  const { willState, dispatch } = useContext(WillFormContext)!;
  const { t } = useLocalization();
  const { mediaMessage } = willState;
  
  const [audioFileName, setAudioFileName] = useState('');
  const [videoFileName, setVideoFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    const file = files ? files[0] : null;

    if (name === 'audio') setAudioFileName(file ? file.name : '');
    if (name === 'video') setVideoFileName(file ? file.name : '');

    dispatch({ type: 'UPDATE_MEDIA', payload: { ...mediaMessage, [name]: file } });
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_MEDIA', payload: { ...mediaMessage, url: e.target.value } });
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">{t('media_messages')}</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">{t('upload_audio')}</label>
          <input id="audio-upload" name="audio" type="file" accept="audio/*" onChange={handleFileChange} className="hidden" />
          <label htmlFor="audio-upload" className="w-full cursor-pointer bg-white border border-slate-300 rounded-md p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50">
            <span className="text-teal-600">{t('choose_file')}</span>
            <span className="text-xs text-slate-500 mt-1">{audioFileName || t('no_file_selected')}</span>
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">{t('upload_video')}</label>
          <input id="video-upload" name="video" type="file" accept="video/*" onChange={handleFileChange} className="hidden" />
          <label htmlFor="video-upload" className="w-full cursor-pointer bg-white border border-slate-300 rounded-md p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50">
            <span className="text-teal-600">{t('choose_file')}</span>
            <span className="text-xs text-slate-500 mt-1">{videoFileName || t('no_file_selected')}</span>
          </label>
        </div>
        <div className="text-center text-slate-500 my-4">{t('or_link_url')}</div>
        <Input
          label={t('url_label')}
          id="mediaUrl"
          name="url"
          value={mediaMessage.url || ''}
          onChange={handleUrlChange}
          placeholder={t('placeholders.media_url')}
        />
      </div>
    </Card>
  );
};

export default Step6Media;