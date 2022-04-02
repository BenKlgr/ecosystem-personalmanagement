import { Box, Card, Popover, Popper, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { text } from 'stream/consumers';

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
      <Popper open={search.length > 0} anchorEl={textFieldRef.current}>
        <Card
          sx={{
            width: textFieldRef.current
              ? textFieldRef.current.clientWidth + 'px'
              : '100%',
          }}>
          <Box sx={{ padding: 4 }}>
            <ResultSetView
              resultset={{
                label: 'Pages',
                results: [
                  {
                    label: 'Site',
                    route: '/',
                    description: 'desc',
                    icon: 'ion:grid',
                  },
                ],
              }}
            />
          </Box>
        </Card>
      </Popper>
    </>
  );
}

type ResultSetViewProps = {
  resultset: ResultSet;
};
function ResultSetView({ resultset }: ResultSetViewProps) {
  return (
    <Box>
      <Typography variant={'overline'}>{resultset.label}</Typography>
    </Box>
  );
}

type ResultSetEntryProps = {};
