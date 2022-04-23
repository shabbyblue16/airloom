import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import testItems from '../fixtures/items.json';

function ItemList({ albumId, usersItems }) {
  const [items, setItems] = React.useState(usersItems[albumId]);
  if (!items) return <div>Loading...</div>;
  return (
    <ImageList
      sx={{
        width: '50%',
        // height: '30%',
        // transform: 'translateZ(0)',
        float: 'right',
      }}
      rowHeight={350}
      gap={1}
    >
      {items.map((item, index) => {
        const cols = index === 0 ? 2 : 1;
        const rows = index === 0 ? 2 : 1;

        return (
          <ImageListItem key={item.id} cols={cols} rows={rows}>
            <Link
              to='/item'
              state={{ item }}
              style={{ textDecoration: 'none', height: '100%', display: 'block' }}
            >
              <img
                src={`${item.urls[0]}?w=${250 * cols}&h=${200 * rows}&fit=cover&auto=format`}
                srcSet={`${item.urls[0]}?w=${250 * cols}&h=${200 * rows}&fit=cover&auto=format&dpr=2 2x`}
                alt={item.name}
                loading='lazy'
                style={{ width: '100%', height: '100%' }}
              />
            </Link>
            <ImageListItemBar
              sx={{
                background: 'none',
                // 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, '
                // + 'rgba(0,0,0,0.3) 70% rgba(0,0,0,0) 100%)',
              }}
              title={item.name}
              position='top'
              actionIcon={(
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.name}`}
                >
                  <StarBorderIcon />
                </IconButton>
              )}
              actionPosition='left'
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const mapStateToProps = (state) => ({
  usersItems: state.usersItems,
});

ItemList.propTypes = ({
  albumId: PropTypes.number,
  usersItems: PropTypes.object,
});

export default connect(mapStateToProps)(ItemList);
