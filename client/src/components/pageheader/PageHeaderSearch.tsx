import {
  Box,
  Card,
  MenuItem,
  Popover,
  Popper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { text } from 'stream/consumers';
import { getRouteGroup, NavigationRoute, navigationRoutes } from '../../utils/routes';
import Fuse from 'fuse.js';
import { ExtendedTheme } from '../../types/theme';
import Iconify from '../Iconify';
import { useNavigate } from 'react-router-dom';

type Result = {
  label: string;
  route: string;
  description: string;
  icon?: string;
};
type ResultSet = {
  label: string;
  results: Result[];
};

export default function PageHeaderSearch() {
  const textFieldRef = useRef<HTMLElement | null>(null);

  const [search, setSearch] = useState('');

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (search.length > 0) setOpen(true);
    else setOpen(false);
  }, [search]);

  const navigationRoutesFlatted = navigationRoutes.map((group) => group.routes).flat(1);

  const nrOptions: Fuse.IFuseOptions<NavigationRoute> = {
    keys: ['label', 'description'],
    includeScore: true,
  };
  const nrIndexer = Fuse.createIndex<NavigationRoute>(
    nrOptions.keys as Fuse.FuseOptionKey[],
    navigationRoutesFlatted
  );
  const nrSearch = new Fuse(navigationRoutesFlatted, nrOptions, nrIndexer);

  const searchResults: ResultSet[] = useMemo(() => {
    if (search.length == 0) return [];

    return [
      {
        label: 'Pages',
        results: [
          ...nrSearch
            .search(search)
            .sort((a, b) => (a.score || 1) - (b.score || 1))
            .map((result) => result.item)
            .map((resultItem) => {
              const routeGroup = getRouteGroup(resultItem.route);
              return {
                label: `${routeGroup?.label} > ${resultItem.label}`,
                icon: resultItem.icon,
                route: resultItem.route,
                description: resultItem.description,
              } as Result;
            }),
        ],
      },
    ];
  }, [search]);

  return (
    <>
      <TextField
        id={'globalSearchTextField'}
        placeholder={'Search'}
        fullWidth
        ref={textFieldRef as any}
        autoComplete={'false'}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      <Popover
        open={open}
        anchorEl={textFieldRef.current}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        disableAutoFocus={true}
        disableEnforceFocus={true}>
        <Card
          sx={{
            width: textFieldRef.current
              ? textFieldRef.current.clientWidth + 'px'
              : '100%',
          }}>
          <Box sx={{ padding: 4, overflowY: 'auto', maxHeight: '20rem' }}>
            {searchResults.map((resultSet: ResultSet, index: number) => (
              <ResultSetView resultset={resultSet} key={index} />
            ))}
          </Box>
        </Card>
      </Popover>
    </>
  );
}

type ResultSetViewProps = {
  resultset: ResultSet;
};
function ResultSetView({ resultset }: ResultSetViewProps) {
  const { label, results } = resultset;

  if (results.length <= 0) return <></>;

  return (
    <Box>
      <Typography variant={'overline'}>{label}</Typography>
      <Stack>
        {results.map((result: Result, index: number) => (
          <ResultSetEntry result={result} key={index} />
        ))}
      </Stack>
    </Box>
  );
}

type ResultSetEntryProps = {
  result: Result;
};
function ResultSetEntry({ result }: ResultSetEntryProps) {
  const { label, icon, description, route } = result;
  const theme: ExtendedTheme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      <MenuItem
        sx={{
          borderRadius: `${theme.shape.borderRadius}px`,
          '&:hover .description': { display: 'block' },
        }}
        onClick={() => navigate(route)}>
        <Stack>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Iconify icon={icon || 'ion:link-outline'} />
            <Typography>{label}</Typography>
          </Stack>
          <Typography
            variant={'subtitle2'}
            sx={{ display: 'none', opacity: 0.5 }}
            className={'description'}>
            {description}
          </Typography>
        </Stack>
      </MenuItem>
    </Box>
  );
}
