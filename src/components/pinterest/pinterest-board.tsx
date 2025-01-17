import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handlePinterestBuild } from 'components/pinterest/utilities';
import { createTestId } from 'utilities';

export type PinterestBoardProperties = {
  /** Pinterest link */
  pinterestLink: string;
  /** Width for the board */
  width?: number;
  /** Height for the board */
  height?: number;
  /** Size of the thumbnails */
  imageWidth?: number;
  /** The type of board */
  variant?: 'board' | 'user';
};

export const PinterestBoard = (properties: PinterestBoardProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      width: 400,
      height: 250,
      imageWidth: 80,
      variant: 'board',
    },
    properties
  );
  return (
    <GeneralObserver onEnter={handlePinterestBuild}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        class="pinterest-board pinterest-board-solid-social"
        {...createTestId('pinterest-board')}
        data-pin-do={`embed${properties_.variant
          .charAt(0)
          .toUpperCase()}${properties_.variant.slice(1)}`}
        data-pin-board-width={properties_.width}
        data-pin-scale-height={properties_.height}
        data-pin-scale-width={properties_.imageWidth}
        href={`https://www.pinterest.com/${properties_.pinterestLink}`}
      />
    </GeneralObserver>
  );
};
