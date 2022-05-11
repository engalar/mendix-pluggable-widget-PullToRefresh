import { createElement, useCallback, useEffect, useRef } from "react";
import { PullToRefreshContainerProps } from "../typings/PullToRefreshProps";
import { useInfiniteScroll } from 'ahooks';
import { ValueStatus, ObjectItem } from 'mendix';

interface Result {
    list: ObjectItem[];
    nextId: string | undefined;
}

export default function (props: PullToRefreshContainerProps) {
    const getLoadMoreList = useCallback(
        (val) => {
            if (props.datasource.status === ValueStatus.Available) {
                props.actionRefresh?.execute();
            }
            return Promise.resolve(val);
        },
        [props.datasource],
    );

    const ref = useRef<HTMLDivElement>(null);

    const { data, loading, loadMore, loadingMore, noMore, mutate } = useInfiniteScroll<Result>(
        getLoadMoreList,
        {
            target: ref,
            manual: true,
            isNoMore: (d) => d?.nextId === undefined,
        },
    );
    useEffect(() => {
        if (props.datasource.status === ValueStatus.Available) {
            mutate({ list: props.datasource.items!, nextId: '0' });
        }

        return () => {
        }
    }, [props.datasource]);

    return (
        <div ref={ref} style={{ height: 150, overflow: 'auto', border: '1px solid', padding: 12 }}>
            {loading ? (
                <p>loading</p>
            ) : (
                <div>
                    {data?.list?.map((item) => (
                        <div key={item.id} style={{ padding: 12, border: '1px solid #f5f5f5' }}>
                            {props.tpl.get(item)}
                        </div>
                    ))}
                </div>
            )}

            <div style={{ marginTop: 8 }}>
                {!noMore && (
                    <button type="button" onClick={loadMore} disabled={loadingMore}>
                        {loadingMore ? 'Loading more...' : 'Click to load more'}
                    </button>
                )}

                {noMore && <span>No more data</span>}
            </div>
        </div>
    );
}
