import Node from 'esast/lib/Node';
import Declaration from 'esast/lib/Declaration';
import Expression, { MemberExpression } from 'esast/lib/Expression';
import Identifier from 'esast/lib/Identifier';
import { LiteralString } from 'esast/lib/Literal';
import Loc from 'esast/lib/Loc';
import Statement from 'esast/lib/Statement';
export declare function identifier(name: string): Identifier;
export declare function loc<A extends Node>(ast: A, loc: Loc): A;
export declare function member(object: Expression, propertyName: string): MemberExpression;
export declare function propertyIdOrLiteral(propertyName: string): Identifier | LiteralString;
export declare function toLineContent(ast: Statement | Declaration | Expression): Statement;
