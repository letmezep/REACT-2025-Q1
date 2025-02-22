import { Character } from '../types/interfaces';

export const exportToCSV = (selectedItems: Character[]) => {
  if (selectedItems.length === 0) return;

  const headers = ['Name', 'Description', 'Details URL'];

  const csvRows = [
    headers.join(','),
    ...selectedItems.map((item) =>
      [
        `name: ${item.name}`,
        `birth year: ${item.birth_year}`,
        `gender: ${item.gender}`,
        `height: ${item.height}`,
        `mass: ${item.mass}`,
        `skin color: ${item.skin_color}`,
        `url: ${item.url}`,
      ].join(', ')
    ),
  ];

  const csvContent = csvRows.join('\n');

  const fileName = `${selectedItems.length}_items.csv`;

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
