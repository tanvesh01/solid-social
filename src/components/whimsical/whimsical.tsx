import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId } from 'utilities';
import { getPadding } from 'components/whimsical/utilities';

export type WhimsicalProperties = {
  /**
   * Whimsical id. Ex:
   * - given a public URL: https://whimsical.com/Py4kdjbPzFpRoAPMbUxmaN
   * - diagramId will be: Py4kdjbPzFpRoAPMbUxmaN
   */
  diagramId: string;

  /**
   * Aspect ratio of Whimsical diagram
   */
  aspectRatio?: string;
};

export const Whimsical = (properties: WhimsicalProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      aspectRatio: '1:1',
    },
    properties
  );
  return (
    <GeneralObserver>
      <div
        {...createTestId('whimsical')}
        className="whimsical-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(properties_.aspectRatio),
        }}
      >
        <iframe
          title={`whimsical-${properties_.diagramId}`}
          src={`https://whimsical.com/embed/${properties_.diagramId}`}
          allowfullscreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </GeneralObserver>
  );
};
