<template>
    <div style="margin-bottom: 10px;">
        <Card>
            <Row>
                <Col span="17">
                    <Row type="flex" align="middle" class="example-left-top">
                        <slot name="ia"></slot>
                    </Row>
                    <div :style="{height: height + 'px'}" class="example-left-bottom">
                        <slot name="code"></slot>
                    </div>
                </Col>
                <Col span="7">
                    <div class="show-data-con" :style="{height: ((parseInt(level) + 1) * 82 + 20) + 'px'}">
                        <pre>
    {{ val }}
                        </pre>
                    </div>
                </Col>
            </Row>
        </Card>
    </div>
</template>

<script>
export default {
    name: 'exampleBlock',
    props: {
        val: Array,
        level: String,
        height: Number
    }
};
</script>

<style>
.example-left-top{
    border-bottom: 1px dashed #e9eaec;
    width: 100%;
    padding: 10px 16px;
}
.example-left-bottom{
    display: flex;
    justify-content: center;
    align-items: center;
}
.show-data-con{
    font-size: 10px;
    border-left: 1px dashed #e9eaec;
    padding-left: 20px;
}
</style>

