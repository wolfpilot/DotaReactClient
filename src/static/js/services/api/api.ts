// Config
import { API_ENDPOINTS } from './constants';

export const getHeroes = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.heroes);
    const data = await response.json();

    // Filter out unwanted properties
    return data.map((hero: any) => {
      const { id, name, localized_name, attack_type, primary_attr, roles } = hero;

      // Re-map properties to desired names
      return {
        id,
        gameAssetName: name.replace('npc_dota_hero_', ''),
        name: localized_name,
        attackType: attack_type,
        primaryAttribute: primary_attr,
        roles,
      };
    });
  } catch (e) {
    return new Error(`Error while fetching: ${e}`);
  }
};

export const getHeroStats = async (heroId: string) => {
  try {
    const response = await fetch(API_ENDPOINTS.heroStats);
    const data = await response.json();

    const hero = data.find((item: any) => item.id.toString() === heroId);

    const {
      id,
      name,
      localized_name,
      primary_attr,
      roles,
      img,
      attack_type,
      base_agi,
      base_int,
      base_str,
      agi_gain,
      int_gain,
      str_gain,
    } = hero;

    return {
      id,
      gameAssetName: name.replace('npc_dota_hero_', ''),
      name: localized_name,
      primaryAttribute: primary_attr,
      roles,
      heroPortrait: img,
      attackType: attack_type,
      baseAgi: base_agi,
      baseInt: base_int,
      baseStr: base_str,
      agiGain: agi_gain,
      intGain: int_gain,
      strGain: str_gain,
    };
  } catch (e) {
    return new Error(`Error while fetching: ${e}`);
  }
};

export const getHeroThumbSource = (id: string) => {
  return `${API_ENDPOINTS.images}/${id}_sb.png`;
};

export const getHeroFullImageSource = (id: string) => {
  return `${API_ENDPOINTS.images}/${id}_full.png`;
};
