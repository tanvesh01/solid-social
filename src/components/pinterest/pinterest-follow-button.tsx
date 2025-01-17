import { JSX } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handlePinterestBuild } from 'components/pinterest/utilities';
import { createTestId } from 'utilities';

export type PinterestFollowButtonProperties = {
  /** Pinterest username */
  username: string;
};

export const PinterestFollowButton = (properties: PinterestFollowButtonProperties): JSX.Element => (
  <GeneralObserver onEnter={handlePinterestBuild}>
    <a
      class="pinterest-follow-button pinterest-follow-button-solid-social"
      {...createTestId('pinterest-follow-button')}
      data-pin-do="buttonFollow"
      href={`https://www.pinterest.com/${properties.username}/`}
    >
      {`Follow @${properties.username}`}
    </a>
  </GeneralObserver>
);
