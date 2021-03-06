/* global graphql */

import React from 'react';

import Galaxy from '../components/Galaxy/Galaxy';

if (!String.prototype.repeat) { // polyfill for repeat function in IE
    String.prototype.repeat = function (count) {
        if (this == null) {
            throw new TypeError(`can't convert ${this} to object`);
        }
        const str = `${this}`;
        count = +count;
        if (count != count) {
            count = 0;
        }
        if (count < 0) {
            throw new RangeError('repeat count must be non-negative');
        }
        if (count == Infinity) {
            throw new RangeError('repeat count must be less than infinity');
        }
        count = Math.floor(count);
        if (str.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        let rpt = '';
        for (let i = 0; i < count; i++) {
            rpt += str;
        }
        return rpt;
    };
}

const IndexPage = props =>
    (<main>
        <Galaxy chapters={props.data.allDataJson.edges[0].node.chapters} />
        <div className="background-image" />
    </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          chapters {
            id
            name
            broadcastDate
            broadcastStartTime
            broadcastEndTime
            audio {
              type
              soundcloudSecretToken
              soundcloudTrackID
            }
          }
        }
      }
    }
  }
`;
