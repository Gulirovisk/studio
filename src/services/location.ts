  /**
   * Represents a geographical location with latitude and longitude coordinates.
   */
  export interface Location {
    /**
     * The latitude of the location.
     */
    lat: number;
    /**
     * The longitude of the location.
     */
    lng: number;
  }

  /**
   * Asynchronously retrieves a list of job opportunities for a given location.
   *
   * @param location The location for which to retrieve job opportunities.
   * @returns A promise that resolves to a list of job opportunities.
   */
  export async function getLocalJobs(location: Location): Promise<string[]> {
    // TODO: Implement this by calling an API.

    return [
      'Plumber',
      'Electrician',
      'Gardener'
    ];
  }

  /**
   * Asynchronously retrieves a list of services available for a given location.
   *
   * @param location The location for which to retrieve services.
   * @returns A promise that resolves to a list of services.
   */
  export async function getLocalServices(location: Location): Promise<string[]> {
    // TODO: Implement this by calling an API.

    return [
      'Tutoring',
      'Cleaning',
      'Delivery'
    ];
  }
