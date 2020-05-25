import * as React from 'react';
import { isUndefined, isNil } from 'testokur-utils';
import { Testable, Colors, Sizes } from '../../modules';
import { BadgeTypes, Badge } from '../Badge';
import { Check, Expired, Cancelled, Time } from '../Icons';

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
  let icon = <Check color={Colors.Success} />;

  if (active && !isUndefined(expirationDate) && expirationDate <= new Date()) {
    status = Statuses.Expired;
    type = BadgeTypes.Critical;
    icon = <Expired color={Colors.Critical} />;
  } else if (isNil(expirationDate)) {
    status = Statuses.PendingForActivation;
    type = BadgeTypes.Warning;
    icon = <Time color={Colors.Warning} />;
  } else if (!active && !isNil(expirationDate)) {
    status = Statuses.Deactivated;
    type = BadgeTypes.Critical;
    icon = <Cancelled color={Colors.Critical} />;
  }

  return (
    <Badge size={Sizes.Large} ariaLabel={status} icon={icon} type={type}>
      {status}
    </Badge>
  );
};

component.displayName = 'UserStatus';

export default component;
