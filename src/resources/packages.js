/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022-2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { gkhubClient as http } from './api';

/**
 * Fetch Knowledge Packages data from the GEO Knowledge Hub API (packages endpoint).
 *
 * @param {string} url fetch url
 * @param {object} searchArgs Object with the search arguments.
 * @param {object} httpClient Axios object used to request the API.
 *
 * @returns {Promise} returns the request promise (generated with axios).
 */
export const fetchPackages = async (url, searchArgs, httpClient = http) => {
  const { data } = await httpClient.get(url, searchArgs);
  return data.hits.hits;
};
