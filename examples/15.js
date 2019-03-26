/* @flow */

/**
 * Иногда разработчики JavaScript используют объекты в качестве хранилища данных.
 * Такие объекты называются мэпами.
 * Flow позволяет типизировать мэп, в котором имена и количество
 * свойств заранее неизвестно.
 *
 * Свойства такого формата называются indexer property.
 */
const map: {
    [number]: string,
} = {};

map[ 412475 ] = 'Svetlana';
map[ 184756 ] = 'Mykola';
map[ 391648 ] = 'Ostap';
map[ '846397' ] = 'Mark';