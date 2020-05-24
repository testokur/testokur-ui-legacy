import * as React from 'react';
import { Testable, Sizes } from '../../modules';
import { BadgeTypes, Badge } from '../Badge';
import { Check } from '../Icons';
import { isUndefined } from 'testokur-utils';

type Props = Testable & {
  active: boolean;
  expirationDate?: Date;
};

const Statuses = {
  Active: 'Aktif',
  Expired: 'Suresi Dolmus',
  Deactivated: 'Iptal Edilmis',
  PendingForActivation: 'Onay Bekliyor',
};

const component = (props: Props): JSX.Element => {
  const { active, expirationDate } = props;
  let status = Statuses.Active;
  let type: BadgeTypes = BadgeTypes.Success;
  let icon = <Check />;

  if (active) {
    if (!isUndefined(expirationDate) && expirationDate <= new Date()) {
      status = Statuses.Expired;
      type = BadgeTypes.Critical;
      // icon = <Expired />;
    }
  }

  // if (props.active) {
  //   return isUndefined(props.expirationDate) || props.expirationDate > new Date()
  //     ? new Status(BadgeTypes.Success, <Check />, UserStatuses.Active)
  //     : new Status(BadgeTypes.Critical, <HourglassFull />, UserStatuses.Expired);
  // }

  // return isNil(props.expirationDate)
  //   ? new Status(BadgeTypes.Warning, <Pending />, UserStatuses.PendingForActivation)
  //   : new Status(BadgeTypes.CriticalInverted, <Cancel />, UserStatuses.Deactivated);

  return (
    <Badge ariaLabel={status} icon={icon} type={type}>
      {status}
    </Badge>
  );
};

component.defaultProps = {
  size: Sizes.Large,
  active: false,
} as Props;

component.displayName = 'Button';

export default component;
