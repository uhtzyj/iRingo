// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { Comparison } from '../wk2/comparison.js';
import { Metadata } from '../wk2/metadata.js';
export class HistoricalComparison {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsHistoricalComparison(bb, obj) {
        return (obj || new HistoricalComparison()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsHistoricalComparison(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new HistoricalComparison()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    metadata(obj) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new Metadata()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    comparisons(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new Comparison()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    comparisonsLength() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    static startHistoricalComparison(builder) {
        builder.startObject(2);
    }
    static addMetadata(builder, metadataOffset) {
        builder.addFieldOffset(0, metadataOffset, 0);
    }
    static addComparisons(builder, comparisonsOffset) {
        builder.addFieldOffset(1, comparisonsOffset, 0);
    }
    static createComparisonsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startComparisonsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static endHistoricalComparison(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createHistoricalComparison(builder, metadataOffset, comparisonsOffset) {
        HistoricalComparison.startHistoricalComparison(builder);
        HistoricalComparison.addMetadata(builder, metadataOffset);
        HistoricalComparison.addComparisons(builder, comparisonsOffset);
        return HistoricalComparison.endHistoricalComparison(builder);
    }
}