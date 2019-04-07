// Config
import { API_ENDPOINTS } from './constants';

export const getHeroes = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.heroes);
    const data = await response.json();

    // Filter out unwanted properties
    return data.map((hero: any) => {
      const { id, localized_name, attack_type, primary_attr, roles } = hero;

      // Re-map properties to desired names
      return {
        id,
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
