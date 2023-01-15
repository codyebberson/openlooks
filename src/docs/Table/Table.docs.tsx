import { Component, JSX } from 'solid-js';
import { Table } from '../../components/Table/Table';
import { DocPage } from '../DocPage/DocPage';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

export const TableDocs: Component = (): JSX.Element => (
  <DocPage
    title="Table"
    subtitle="Render table with theme styles"
    usage={
      <div>
        <Table>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          <tbody>
            {elements.map((element) => (
              <tr>
                <td>{element.position}</td>
                <td>{element.name}</td>
                <td>{element.symbol}</td>
                <td>{element.mass}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    }
  />
);
