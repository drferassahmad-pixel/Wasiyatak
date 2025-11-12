import React, { useContext } from 'react';
import { WillFormContext } from '../../context/WillFormProvider';
import { Asset, AssetType, ComplexAsset } from '../../types';
import * as constants from '../../constants';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useLocalization } from '../../context/LocalizationContext';

const Step4Assets: React.FC = () => {
  const { willState, dispatch } = useContext(WillFormContext)!;
  const { t, currency } = useLocalization();
  const { assets, complexAssets, beneficiaries } = willState;

  // --- Standard Assets ---
  const handleAddAsset = () => {
    const newAsset: Asset = {
      id: `asset-${Date.now()}`,
      type: AssetType.OTHER,
      description: '',
      estimatedValue: 0,
      currency: currency.code,
    };
    dispatch({ type: 'UPDATE_ASSETS', payload: [...assets, newAsset] });
  };

  const handleRemoveAsset = (id: string) => {
    dispatch({ type: 'UPDATE_ASSETS', payload: assets.filter(a => a.id !== id) });
  };

  const handleAssetChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = assets.map(a => 
      a.id === id ? { ...a, [name]: name === 'estimatedValue' ? parseFloat(value) || 0 : value } : a
    );
    dispatch({ type: 'UPDATE_ASSETS', payload: updated });
  };

  // --- Complex Assets ---
  const handleAddComplexAsset = () => {
    const newAsset: ComplexAsset = {
        id: `complex-asset-${Date.now()}`,
        description: '',
        estimatedValue: 0,
        legalOwner: '',
        beneficialOwner: '',
        currency: currency.code,
    };
    dispatch({ type: 'UPDATE_COMPLEX_ASSETS', payload: [...complexAssets, newAsset] });
  }

  const handleRemoveComplexAsset = (id: string) => {
    dispatch({ type: 'UPDATE_COMPLEX_ASSETS', payload: complexAssets.filter(a => a.id !== id) });
  }

  const handleComplexAssetChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = complexAssets.map(a => 
      a.id === id ? { ...a, [name]: name === 'estimatedValue' ? parseFloat(value) || 0 : value } : a
    );
    dispatch({ type: 'UPDATE_COMPLEX_ASSETS', payload: updated });
  }


  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">{t('assets')}</h2>
      <div className="space-y-6">
        {assets.map((asset) => (
          <div key={asset.id} className="p-4 border rounded-lg space-y-4 relative">
             <Button 
                onClick={() => handleRemoveAsset(asset.id)} 
                variant="ghost"
                className="absolute top-2 end-2 !p-2 h-8 w-8 text-red-500 hover:bg-red-100"
                aria-label={t('remove')}
             >
                &times;
             </Button>
            <Select
              label={t('asset_type')}
              id={`type-${asset.id}`}
              name="type"
              value={asset.type}
              onChange={(e) => handleAssetChange(asset.id, e)}
            >
              {constants.assetTypeOptions.map((opt) => <option key={opt.value} value={opt.value}>{t(opt.key)}</option>)}
            </Select>
            <Input
              label={t('asset_description')}
              id={`description-${asset.id}`}
              name="description"
              value={asset.description}
              onChange={(e) => handleAssetChange(asset.id, e)}
            />
             <div className="flex items-end gap-4">
                <div className="flex-grow">
                    <Input
                      label={t('asset_value')}
                      id={`estimatedValue-${asset.id}`}
                      name="estimatedValue"
                      type="number"
                      value={asset.estimatedValue}
                      onChange={(e) => handleAssetChange(asset.id, e)}
                    />
                </div>
                <div className="w-28">
                    <Select label={t('currency')} id={`currency-${asset.id}`} name="currency" value={asset.currency} onChange={e => handleAssetChange(asset.id, e)}>
                        {constants.currencies.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                    </Select>
                </div>
             </div>
            <Select
              label={t('asset_beneficiary')}
              id={`beneficiaryId-${asset.id}`}
              name="beneficiaryId"
              value={asset.beneficiaryId || ''}
              onChange={(e) => handleAssetChange(asset.id, e)}
            >
              <option value="">{t('unassigned')}</option>
              {beneficiaries.length > 0 ? (
                beneficiaries.map(b => <option key={b.id} value={b.id}>{b.name}</option>)
              ) : (
                <option disabled>{t('no_beneficiaries')}</option>
              )}
            </Select>
          </div>
        ))}
        <Button onClick={handleAddAsset} variant="secondary">{`+ ${t('add_asset')}`}</Button>
      </div>

      <hr className="my-8" />

      <h3 className="text-xl font-semibold mb-4">{t('complex_assets_title')}</h3>
      <div className="space-y-6">
          {complexAssets.map(asset => (
            <div key={asset.id} className="p-4 border rounded-lg space-y-4 relative bg-slate-50">
                <Button 
                    onClick={() => handleRemoveComplexAsset(asset.id)} 
                    variant="ghost"
                    className="absolute top-2 end-2 !p-2 h-8 w-8 text-red-500 hover:bg-red-100"
                    aria-label={t('remove')}
                >
                    &times;
                </Button>
                <Input
                    label={t('asset_description')}
                    id={`complex-description-${asset.id}`}
                    name="description"
                    value={asset.description}
                    onChange={(e) => handleComplexAssetChange(asset.id, e)}
                />
                <div className="flex items-end gap-4">
                    <div className="flex-grow">
                        <Input
                            label={t('asset_value')}
                            id={`complex-estimatedValue-${asset.id}`}
                            name="estimatedValue"
                            type="number"
                            value={asset.estimatedValue}
                            onChange={(e) => handleComplexAssetChange(asset.id, e)}
                        />
                    </div>
                    <div className="w-28">
                        <Select label={t('currency')} id={`complex-currency-${asset.id}`} name="currency" value={asset.currency} onChange={e => handleComplexAssetChange(asset.id, e)}>
                            {constants.currencies.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                        </Select>
                    </div>
                </div>
                <Input
                    label={t('legal_owner')}
                    id={`complex-legalOwner-${asset.id}`}
                    name="legalOwner"
                    value={asset.legalOwner}
                    onChange={(e) => handleComplexAssetChange(asset.id, e)}
                />
                <Input
                    label={t('beneficial_owner')}
                    id={`complex-beneficialOwner-${asset.id}`}
                    name="beneficialOwner"
                    value={asset.beneficialOwner}
                    onChange={(e) => handleComplexAssetChange(asset.id, e)}
                />
            </div>
          ))}
          <Button onClick={handleAddComplexAsset} variant="secondary">{`+ ${t('add_complex_asset')}`}</Button>
      </div>
    </Card>
  );
};

export default Step4Assets;